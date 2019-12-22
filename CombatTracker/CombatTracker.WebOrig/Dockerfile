FROM microsoft/aspnetcore:2.0 AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/aspnetcore-build:2.0 AS build
WORKDIR /src
COPY CombatTracker.sln ./
COPY CombatTracker.Web/CombatTracker.Web.csproj CombatTracker.Web/
COPY CombatTracker.Domain/CombatTracker.Domain.csproj CombatTracker.Domain/
COPY CombatTracker.Entities/CombatTracker.Entities.csproj CombatTracker.Entities/
COPY CombatTracker.Services/CombatTracker.Services.csproj CombatTracker.Services/
RUN dotnet restore -nowarn:msb3202,nu1503
COPY . .
WORKDIR /src/CombatTracker.Web
RUN dotnet build -c Release -o /app

FROM build AS publish
RUN dotnet publish -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "CombatTracker.Web.dll"]
