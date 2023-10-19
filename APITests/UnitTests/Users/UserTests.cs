
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
        result.Result.Should().BeEquivalentTo(TypedResults.Ok(expected));
    }
}