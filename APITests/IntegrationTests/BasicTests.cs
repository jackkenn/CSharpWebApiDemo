using FluentAssertions;
using Microsoft.AspNetCore.Mvc.Testing;

namespace APITests.IntegrationTests;

public class BasicTests : IClassFixture<WebApplicationFactory<Program>>
{
    private readonly WebApplicationFactory<Program> _factory;

    public BasicTests(WebApplicationFactory<Program> factory)
    {
        _factory = factory;
    }

    [Fact]
    public async Task TestRootEndpoint()
    {
        // Arrange
        var client = _factory.CreateClient();

        // Act
        var response = await client.GetAsync("/");

        // Assert
        response.EnsureSuccessStatusCode();
        response.Content.ReadAsStringAsync().Result.Should().Be("Hello World!");
    }

        [Fact]
    public async Task TestGetUsersEndpoint()
    {
        // Arrange
        var client = _factory.CreateClient();

        // Act
        var response = await client.GetAsync("/user");

        // Assert
        response.EnsureSuccessStatusCode();
    }
}