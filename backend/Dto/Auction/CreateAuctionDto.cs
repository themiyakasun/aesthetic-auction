﻿using backend.Models;
using System.ComponentModel.DataAnnotations;

namespace backend.Dto.Auction
{
    public class CreateAuctionDto
    {
        [Required]
        public string Status { get; set; } = string.Empty;
        [Required]
        public DateTime StartDate { get; set; }
        [Required]
        public DateTime EndDate { get; set; } = DateTime.MinValue;
        [Required]
        public int CreatorId { get; set; }
        [Required]
        public int ArtId { get; set; }
    }
}