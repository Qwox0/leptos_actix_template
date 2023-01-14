# Fullstack Rust WebApp Template

This Template has a Frontend in Leptos and Backend in Actix. This Template also supports PWAs.

## Setup

1. `cp -r leptos_actix_template <projectname>`
2. `cd <projectname>`
3. edit `[workspace.package]` in `./Cargo.toml`
4. edit `<title>` in `./frontend/index.html`
5. change `./frontend/icons/*`
6. edit `./frontend/pwa.webmanifest`
7. edit `./frontend/sw.js`
8. `rm Cargo.lock`
9. For TLS add fullchain16.pem and privkey16.pem in project root.

# Leptos

## installation

`rustup toolchain install nightly`

`rustup default nightly`

`rustup target add wasm32-unknown-unknown`
