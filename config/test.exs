use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :boighor_template, BoighorTemplateWeb.Endpoint,
  http: [port: 4002],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
config :boighor_template, BoighorTemplate.Repo,
  username: "postgres",
  password: "postgres",
  database: "boighor_template_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox
