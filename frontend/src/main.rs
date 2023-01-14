use frontend::*;
use leptos::*;

pub fn main() {
    console_error_panic_hook::set_once();
    mount_to_body(|cx| view! { cx,
        <SimpleCounter
            initial_value=0
            step=1
        />
    })
}
