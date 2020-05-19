# deno-playground

My Deno Playground

<img height=180 src="https://upload.wikimedia.org/wikipedia/commons/8/84/Deno.svg">

## Install Deno

```
brew install deno
```

Deno Help

```
deno 1.0.0
A secure JavaScript and TypeScript runtime

Docs: https://deno.land/std/manual.md
Modules: https://deno.land/std/ https://deno.land/x/
Bugs: https://github.com/denoland/deno/issues

To start the REPL:
  deno

To execute a script:
  deno run https://deno.land/std/examples/welcome.ts

To evaluate code in the shell:
  deno eval "console.log(30933 + 404)"

USAGE:
    deno [OPTIONS] [SUBCOMMAND]

OPTIONS:
    -h, --help                     Prints help information
    -L, --log-level <log-level>    Set log level [possible values: debug, info]
    -q, --quiet                    Suppress diagnostic output
    -V, --version                  Prints version information

SUBCOMMANDS:
    bundle         Bundle module and dependencies into single file
    cache          Cache the dependencies
    completions    Generate shell completions
    doc            Show documentation for a module
    eval           Eval script
    fmt            Format source files
    help           Prints this message or the help of the given subcommand(s)
    info           Show info about cache or info related to source file
    install        Install script as an executable
    repl           Read Eval Print Loop
    run            Run a program given a filename or url to the module
    test           Run tests
    types          Print runtime TypeScript declarations
    upgrade        Upgrade deno executable to given version

ENVIRONMENT VARIABLES:
    DENO_DIR             Set deno's base directory (defaults to $HOME/.deno)
    DENO_INSTALL_ROOT    Set deno install's output directory
                         (defaults to $HOME/.deno/bin)
    NO_COLOR             Set to disable color
    HTTP_PROXY           Proxy address for HTTP requests
                         (module downloads, fetch)
    HTTPS_PROXY          Same but for HTTPS
```

You can run both TypeScript (.ts) files, or JavaScript (.js) files.

```
➜  ~ deno run  https://deno.land/std/examples/welcome.ts
Download https://deno.land/std/examples/welcome.ts
Warning Implicitly using master branch https://deno.land/std/examples/welcome.ts
Compile https://deno.land/std/examples/welcome.ts
Welcome to Deno 🦕
```

## Deno Code Examples

Check out via https://deno.land/std/examples/.

- cat.ts prints the content a list of files provided as arguments
- catj.ts prints the content a list of files provided as arguments
- chat/ an implementation of a chat
- colors.ts an example of
- curl.ts a simple implementation of curl that prints the content of the URL specified as argument
- echo_server.ts a TCP echo server
- gist.ts a program to post files to gist.github.com
- test.ts a sample test suite
- welcome.ts a simple console.log statement (the first program we ran above)
- xeval.ts allows you to run any TypeScript code for any line of standard input received. Once known as deno xeval but since removed from the official command.

## Hello World

```
import { serve } from 'https://deno.land/std/http/server.ts'
const s = serve({ port: 8000 })
console.log('http://localhost:8000/')
for await (const req of s) {
  req.respond({ body: 'Hello World\n' })
}
```

Run it using ``deno run app.ts``. Deno downloads all the required dependencies. 

```
Compile file:///Users/wingkwong/Documents/GitHub/deno-playground/hello-world/app.ts
Download https://deno.land/std/http/server.ts
Warning Implicitly using master branch https://deno.land/std/http/server.ts
Download https://deno.land/std/encoding/utf8.ts
Download https://deno.land/std/io/bufio.ts
Download https://deno.land/std/testing/asserts.ts
Download https://deno.land/std/async/mod.ts
Download https://deno.land/std/http/_io.ts
Warning Implicitly using master branch https://deno.land/std/encoding/utf8.ts
Warning Implicitly using master branch https://deno.land/std/http/_io.ts
Warning Implicitly using master branch https://deno.land/std/async/mod.ts
Warning Implicitly using master branch https://deno.land/std/io/bufio.ts
Warning Implicitly using master branch https://deno.land/std/testing/asserts.ts
Download https://deno.land/std/io/util.ts
Warning Implicitly using master branch https://deno.land/std/io/util.ts
Download https://deno.land/std/path/mod.ts
Warning Implicitly using master branch https://deno.land/std/path/mod.ts
Download https://deno.land/std/path/win32.ts
Download https://deno.land/std/path/posix.ts
Download https://deno.land/std/path/common.ts
Download https://deno.land/std/path/separator.ts
Download https://deno.land/std/path/interface.ts
Download https://deno.land/std/path/glob.ts
Warning Implicitly using master branch https://deno.land/std/path/win32.ts
Warning Implicitly using master branch https://deno.land/std/path/posix.ts
Warning Implicitly using master branch https://deno.land/std/path/common.ts
Warning Implicitly using master branch https://deno.land/std/path/separator.ts
Warning Implicitly using master branch https://deno.land/std/path/interface.ts
Warning Implicitly using master branch https://deno.land/std/path/glob.ts
Download https://deno.land/std/path/_constants.ts
Download https://deno.land/std/path/_util.ts
Warning Implicitly using master branch https://deno.land/std/path/_constants.ts
Warning Implicitly using master branch https://deno.land/std/path/_util.ts
Download https://deno.land/std/fmt/colors.ts
Download https://deno.land/std/testing/diff.ts
Warning Implicitly using master branch https://deno.land/std/fmt/colors.ts
Warning Implicitly using master branch https://deno.land/std/testing/diff.ts
Download https://deno.land/std/path/_globrex.ts
Warning Implicitly using master branch https://deno.land/std/path/_globrex.ts
Download https://deno.land/std/async/deferred.ts
Download https://deno.land/std/async/delay.ts
Download https://deno.land/std/async/mux_async_iterator.ts
Warning Implicitly using master branch https://deno.land/std/async/deferred.ts
Warning Implicitly using master branch https://deno.land/std/async/mux_async_iterator.ts
Warning Implicitly using master branch https://deno.land/std/async/delay.ts
Download https://deno.land/std/textproto/mod.ts
Download https://deno.land/std/http/http_status.ts
Warning Implicitly using master branch https://deno.land/std/textproto/mod.ts
Warning Implicitly using master branch https://deno.land/std/http/http_status.ts
Download https://deno.land/std/bytes/mod.ts
Warning Implicitly using master branch https://deno.land/std/bytes/mod.ts
error: Uncaught PermissionDenied: network access to "0.0.0.0:8000", run again with the --allow-net flag
    at unwrapResponse ($deno$/ops/dispatch_json.ts:43:11)
    at Object.sendSync ($deno$/ops/dispatch_json.ts:72:10)
    at Object.listen ($deno$/ops/net.ts:51:10)
    at listen ($deno$/net.ts:152:22)
    at serve (https://deno.land/std/http/server.ts:261:20)
    at file:///Users/wingkwong/Documents/GitHub/deno-playground/hello-world/app.ts:2:11
```

Hitting a permission denied problem is expected. It won't allow you to run in the browser on your system unless you explicitly allow it. To do that, we need to add an extra flag ``--allow-net``.

```
deno run --allow-net app.ts
```

![image](https://user-images.githubusercontent.com/35857179/82280346-4abf2480-99c1-11ea-8e33-5bd039446304.png)

Other flags allow Deno to unlock other functionality:

- ``--allow-env`` allow environment access
- ``--allow-hrtime`` allow high resolution time measurement
- ``--allow-net=<allow-net>`` allow network access
- ``--allow-plugin`` allow loading plugins
- ``--allow-read=<allow-read>`` allow file system read access
- ``--allow-run`` allow running subprocesses
- ``--allow-write=<allow-write>`` allow file system write access
- ``--allow-all`` allow all permissions (same as ``-A``)

## Formatting Code

Deno provides ``deno fmt`` like Go to format your code.

## For More

- [Deno Official Website](https://deno.land)
- [API Documentation](https://deno.land/typedoc/index.html)
- [Awesome Deno](https://github.com/denolib/awesome-deno)