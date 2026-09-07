from functools import lru_cache

from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "RNOTSKY API"
    app_env: str = "development"
    debug: bool = False

    database_url: str = ""

    jwt_secret_key: str = Field(default="")
    jwt_refresh_secret_key: str = Field(default="")

    access_token_expire_minutes: int = 15
    refresh_token_expire_days: int = 30

    frontend_url: str = "http://localhost:3000"

    cors_origins: str = "http://localhost:3000"
    trusted_hosts: str = "localhost,127.0.0.1"

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
        extra="ignore",
    )

    @property
    def cors_origin_list(self) -> list[str]:
        return [
            origin.strip()
            for origin in self.cors_origins.split(",")
            if origin.strip()
        ]

    @property
    def trusted_host_list(self) -> list[str]:
        return [
            host.strip()
            for host in self.trusted_hosts.split(",")
            if host.strip()
        ]


@lru_cache
def get_settings() -> Settings:
    return Settings()


settings = get_settings()