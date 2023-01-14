# Fullstack Rust WebApp Template

Frontend in leptos

Backend in Actix

This Template supports PWAs

### Info

For TLS add fullchain16.pem and privkey16.pem in project root.

# Setup

1. `cp -r leptos_actix_template <projectname>`
2. `cd <projectname>`
3. edit `[workspace.package]` in `Cargo.toml`
4. `rm Cargo.lock`

# Leptos

## installation

rustup toolchain install nightly
rustup default nightly
rustup target add wasm32-unknown-unknown
