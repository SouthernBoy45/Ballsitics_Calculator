﻿using FullStackAuth_WebAPI.Data;
using FullStackAuth_WebAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using System.IO;
using Microsoft.Extensions.Hosting;
using System;
using Microsoft.AspNetCore.Hosting;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Google.Protobuf.WellKnownTypes;

namespace FullStackAuth_WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImagesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IWebHostEnvironment _hostEnvironment;
        public ImagesController(ApplicationDbContext context, IWebHostEnvironment hostEnvironment)
        {
            _context = context;
            this._hostEnvironment = hostEnvironment;
        }

        [HttpGet, Authorize]
        public async Task<ActionResult<IEnumerable<Image>>> GetAllImages()
        {
            string userId = User.FindFirstValue("id");
            // Query the Image table and project the result into a new collection of Image.
            // For each image, the ImageSrc is created by combining the request scheme (http or https),
            // the host, the base path of the request, and the name of the image.
            return await _context.Image.Where(i => i.ShotData.UserId == userId).Select(x => new Image()
            {
                Id = x.Id,
                ShotDataId = x.ShotDataId,
                ShotData = _context.ShotDatas.Where(s => s.Id == x.ShotDataId).FirstOrDefault(),
                Title = x.Title,
                Description = x.Description,
                ImageSrc = String.Format("{0}://{1}{2}/Images/{3}", Request.Scheme, Request.Host, Request.PathBase, x.Title)
            }).ToListAsync();
        }
        [HttpPost]
        public async Task<ActionResult<Image>> PostNewImage([FromForm] Image value)
        {
            // Save the image from the Image object to the Images folder.
            // The SaveImage method returns the name of the image, which is then assigned to the Title property.
            value.Title = await SaveImage(value.ImageFile);

            // Add the Image object to the Image table in the database and save changes.
            _context.Image.Add(value);
            _context.SaveChanges();

            value.ShotData = _context.ShotDatas.Where(s => s.Id == value.ShotDataId).FirstOrDefault();

            // Return a 201 Created status code and the Image object.
            return StatusCode(201, value);
        }

        // This method saves an image file to the Images folder and returns the name of the image.
        [NonAction]
        public async Task <String> SaveImage(IFormFile imageFile)
        {
            // Create a new image name by taking the first 10 characters of the original file name (without the extension),
            // replacing spaces with dashes, and appending a timestamp. Then append the original extension to this name.
            string imageName = new String(Path.GetFileNameWithoutExtension(imageFile.FileName).Take(10).ToArray()).Replace(' ', '-');
            imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(imageFile.FileName);

            // Combine the root path of the project, the Images folder, and the image name to get the image path.
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images", imageName);

            // Create a new file at the image path and copy the contents of the image file to it.
            using (var fileStream = new FileStream(imagePath, FileMode.Create))
            {
                await imageFile.CopyToAsync(fileStream);
            }

            // Return the name of the image.
            return imageName;
        }
    }
}
