defmodule BoighorTemplateWeb.PageController do
  use BoighorTemplateWeb, :controller

  def about(conn, _params) do
    render(conn, "about.html")
  end

  def blog_details(conn, _params) do
    render(conn, "blog_details.html")
  end

  def blog(conn, _params) do
    render(conn, "blog.html")
  end

  def cart(conn, _params) do
    render(conn, "cart.html")
  end

  def checkout(conn, _params) do
    render(conn, "checkout.html")
  end

  def contact(conn, _params) do
    render(conn, "contact.html")
  end

  def error404(conn, _params) do
    render(conn, "error404.html")
  end

  def faq(conn, _params) do
    render(conn, "faq.html")
  end

  def index(conn, _params) do
    render(conn, "index.html")
  end

  def my_account(conn, _params) do
    render(conn, "my_account.html")
  end

  def portfolio_details(conn, _params) do
    render(conn, "portfolio_details.html")
  end

  def portfolio(conn, _params) do
    render(conn, "portfolio.html")
  end

  def shop_grid(conn, _params) do
    render(conn, "shop_grid.html")
  end

  def single_product(conn, _params) do
    render(conn, "single_product.html")
  end

  def team(conn, _params) do
    render(conn, "team.html")
  end

  def wishlist(conn, _params) do
    render(conn, "wishlist.html")
  end
end
