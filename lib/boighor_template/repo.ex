defmodule BoighorTemplate.Repo do
  use Ecto.Repo,
    otp_app: :boighor_template,
    adapter: Ecto.Adapters.Postgres
end
