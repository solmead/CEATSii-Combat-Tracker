#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["CombatTracker.Web/nuget.config", "CombatTracker.Web/"]
COPY ["nuget.config", "."]
COPY ["CombatTracker.Authorization/nuget.config", "CombatTracker.Authorization/"]
COPY ["CombatTracker.Entities/nuget.config", "CombatTracker.Entities/"]
COPY ["CombatTracker.Domain/nuget.config", "CombatTracker.Domain/"]
COPY ["CombatTracker.Services/nuget.config", "CombatTracker.Services/"]
COPY ["CombatTracker.Web/CombatTracker.Web.csproj", "CombatTracker.Web/"]
COPY ["CombatTracker.Authorization/CombatTracker.Authorization.csproj", "CombatTracker.Authorization/"]
COPY ["CombatTracker.Entities/CombatTracker.Entities.csproj", "CombatTracker.Entities/"]
COPY ["CombatTracker.Domain/CombatTracker.Domain.csproj", "CombatTracker.Domain/"]
COPY ["CombatTracker.Services/CombatTracker.Services.csproj", "CombatTracker.Services/"]
RUN dotnet restore "CombatTracker.Web/CombatTracker.Web.csproj"
COPY . .
WORKDIR "/src/CombatTracker.Web"
RUN dotnet build "CombatTracker.Web.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "CombatTracker.Web.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "CombatTracker.Web.dll"]
