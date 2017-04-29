Rust Telegram Bot Library
=========================
[![Build Status](https://img.shields.io/travis/telegram-rs/telegram-bot/master.svg)](https://travis-ci.org/telegram-rs/telegram-bot)
[![License](https://img.shields.io/github/license/telegram-rs/telegram-bot.svg)]()
[![Crates.io](https://img.shields.io/crates/v/telegram-bot.svg)](https://crates.io/crates/telegram-bot)

<table>
  <tbody>
    <tr>
      <td><b>Documentation:</b></td>
      <td><a href="https://docs.rs/telegram-bot/0.5.0/telegram_bot/">Latest crates.io version</a></td>
      <td><a href="https://telegram-rs.github.io/telegram-bot/telegram_bot/"><code>master</code></a></td>
    </tr>
  </tbody>
</table>

A library for writing your own [Telegram](https://telegram.org/) bots. More information [here](https://core.telegram.org/bots). Official API [here](https://core.telegram.org/bots/api).

## **Warning!**

This library will undergo a major rewrite in the next few months. Currently the **development is stalled** and many new API parts are not supported right now! If you need to write a production ready application, either wait or use another (non-Rust) library. We're sorry :(

## Example
Here is a simple example (see [`example/simple.rs`](https://github.com/telegram-rs/telegram-bot/blob/master/examples/simple.rs)):

``` rust
extern crate futures;
extern crate telegram_bot;
extern crate tokio_core;

use std::env;

use futures::Stream;
use tokio_core::reactor::Core;
use telegram_bot::*;

fn main() {
    let mut core = Core::new().unwrap();

    let token = env::var("TELEGRAM_BOT_TOKEN").unwrap();
    let api = Api::from_token(&core.handle(), &token).unwrap();

    // Fetch new updates via long poll method
    let future = api.stream().for_each(|update| {

        // If the received update contains a new message...
        if let UpdateKind::Message(message) = update.kind {

            // Get sender's first name if available.
            let first_name = match message.from.as_ref() {
                Some(from) => &from.first_name,
                None => return Ok(()) // Skip a message.
            };

            if let MessageKind::Text {ref data, ..} = message.kind {
                // Print received text message to stdout.
                println!("<{}>: {}", first_name, data);

                // Answer message with "Hi".
                api.spawn(&message.text_reply(
                    format!("Hi, {}! You just wrote '{}'", first_name, data)
                ));
            }
        }

        Ok(())
    });

    core.run(future).unwrap();
}
```
You can find a bigger examples in the `examples`.

## Usage
This library is available via `crates.io`. In order to use it, just add this to your `Cargo.toml`:

```
telegram-bot = "0.5"
```

## Collaboration
Yes please! Every type of contribution is welcome: Create issues, hack some code or make suggestions. If you don't know where to start, just contact me (my email is on my github profile).

Please submit pull request against the `master` branch, unless all changes are just documentation fixes.
