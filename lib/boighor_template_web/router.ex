defmodule BoighorTemplateWeb.Router do
  use BoighorTemplateWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", BoighorTemplateWeb do
    pipe_through :browser

    get "/", PageController, :index
    get "/about.html", PageController, :about
    get "/blog-details.html", PageController, :blog_details
    get "/blog.html", PageController, :blog
    get "/cart.html", PageController, :cart
    get "/checkout.html", PageController, :checkout
    get "/contact.html", PageController, :contact
    get "/error404.html", PageController, :error404
    get "/faq.html", PageController, :faq
    get "/index.html", PageController, :index
    get "/my-account.html", PageController, :my_account
    get "/portfolio-details.html", PageController, :portfolio_details
    get "/portfolio.html", PageController, :portfolio
    get "/shop-grid.html", PageController, :shop_grid
    get "/single-product.html", PageController, :single_product
    get "/team.html", PageController, :team
    get "/wishlist.html", PageController, :wishlist
  end

  # Other scopes may use custom stacks.
  # scope "/api", BoighorTemplateWeb do
  #   pipe_through :api
  # end
end
