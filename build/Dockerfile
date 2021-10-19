FROM mcr.microsoft.com/dotnet/sdk:5.0 as builder

ADD ./src /app

RUN dotnet restore /app  --configfile /app/NuGet.config
RUN dotnet build /app -c Release --no-restore

RUN dotnet test /app --no-build -c Release --filter "Category=UnitTest|Category=IntegrationTest" -l "console;verbosity=detailed"
RUN dotnet tool install remote.payments.tools.settingsutil -g --configfile /app/NuGet.config
RUN export PATH="$PATH:/root/.dotnet/tools" \
    && settingsutil check -p /app

RUN dotnet publish /app/Remote.Payments.Developer.Docs.WebSite/Remote.Payments.Developer.Docs.WebSite.csproj --no-build -c Release -o /publish

FROM mcr.microsoft.com/dotnet/aspnet:5.0
WORKDIR /app
COPY --from=builder /publish .
ENTRYPOINT [ "dotnet", "Remote.Payments.Developer.Docs.WebSite.dll" ]