﻿using backend.Dto.Auction;
using backend.Models;

namespace backend.Mappers
{
    public static class AuctionMappers
    {
        public static AuctionDto ToAuctionDto(this Auction auctionModel)
        {
            return new AuctionDto
            {
                Id = auctionModel.Id,
                Status = auctionModel.Status,
                StartDate = auctionModel.StartDate,
                EndDate = auctionModel.EndDate,
                CreatorId = auctionModel.CreatorId,
                ArtId = auctionModel.ArtId,
                CreatedDate = auctionModel.CreatedDate,
            };
        }
        public static Auction ToCreateAuctionDto(this CreateAuctionDto auctionDto)
        {
            return new Auction
            {
                Status = auctionDto.Status,
                StartDate = auctionDto.StartDate,
                EndDate = auctionDto.EndDate,
                CreatorId = auctionDto.CreatorId,
                ArtId = auctionDto.ArtId,
            };
        }
        public static Auction ToUpdateAuctionDto(this UpdateAuctionDto auctionDto, int id)
        {
            return new Auction
            {
                Status = auctionDto.Status,
                StartDate = auctionDto.StartDate,
                EndDate = auctionDto.EndDate,
                ArtId = auctionDto.ArtId
            };
        }
    }
}