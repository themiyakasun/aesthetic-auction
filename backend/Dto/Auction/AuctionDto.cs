﻿using backend.Models;

namespace backend.Dto.Auction
{
    public class AuctionDto
    {
        public int Id { get; set; }
        public string Status { get; set; } = string.Empty;
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; } = DateTime.MinValue;
        public int CreatorId { get; set; }
        public int ArtId { get; set; }
        public DateTime CreatedDate { get; set; } = DateTime.Now;
    }
}