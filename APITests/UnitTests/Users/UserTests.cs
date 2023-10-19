
using API.Entites.Users;
using API.RouteBuilders.Users;
using API.Services.Users;
using AutoFixture;
using FluentAssertions;
using Microsoft.AspNetCore.Http;
using Moq;

namespace APITests.UnitTests.Users;

public class UserTests {
    private readonly Mock<IUserService> userRepo = new();
    private readonly Fixture fixture = new();

    [Fact]
    public async Task GetUserReturnUserIfExists() {
        //Arrange
        var expected = fixture.Create<User>();
        userRepo.Setup(repo => repo.Find(It.IsAny<int>())).ReturnsAsync(expected);
        
        //Act
        var result = await UserGroup.GetUser(expected.Id, userRepo.Object);

        //Assert
        result.Result.Should().BeEquivalentTo(TypedResults.Ok(new UserDto(expected)));
    }

    [Fact]
    public async Task GetUserReturnNotFoundIfNotExists() {
        //Arrange
        userRepo.Setup(repo => repo.Find(It.IsAny<int>())).ReturnsAsync((User?)null);
        
        //Act
        var result = await UserGroup.GetUser(0, userRepo.Object);

        //Assert
        result.Result.Should().BeEquivalentTo(TypedResults.NotFound());
    }

        [Fact]
    public async Task CreateAddsValidUser() {
        //Arrange
        List<User> users = new();
        var expected = fixture.Create<UserDto>();
        userRepo.Setup(repo => repo.Add(It.IsAny<User>())).Callback((User user) => users.Add(user));
        
        //Act
        var result = await UserGroup.CreateUser(expected, userRepo.Object);

        //Assert
        expected.Should().BeEquivalentTo(new UserDto(users.FirstOrDefault()));
    }
}