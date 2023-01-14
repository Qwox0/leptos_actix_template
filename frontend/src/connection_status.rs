use leptos::*;

#[component]
pub fn ConnectionStatus(cx: Scope) -> impl IntoView {
    let (is_online, set_online) = create_signal(cx, web_sys::window().expect("site window").navigator().on_line());

    window_event_listener("online", move |_| set_online(true));
    window_event_listener("offline", move |_| set_online(false));

    view! {cx,
        <div class="connection">
            {move || if is_online() { "online ✅" } else { "offline ❌" }}
        </div>
    }
}
