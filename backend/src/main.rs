use actix_files::Files;
use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};
//use log::info;
//use my_web_app::MyTestStruct;

#[get("/hello")]
async fn hello() -> impl Responder {
    HttpResponse::Ok().body("Hello World")
}

#[post("/echo")]
async fn echo(req_body: String) -> impl Responder {
    HttpResponse::Ok().body(req_body)
}
#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .service(hello)
            .service(echo)
            .service(Files::new("/", "./dist/").index_file("index.html"))
            .default_service(
                //web::route().to(|| HttpResponse::Found().header("Location", "/").finish()),
                //web::to(|| HttpResponse::Found().insert_header(("Location", "/"))),
                web::to(|| HttpResponse::NotFound()),
            )
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}
