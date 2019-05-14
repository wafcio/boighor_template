defmodule BoighorTemplateWeb.PageController do
  use BoighorTemplateWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
