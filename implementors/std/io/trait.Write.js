(function() {var implementors = {};
implementors["bytes"] = [{"text":"impl&lt;B:&nbsp;BufMut + Sized&gt; Write for Writer&lt;B&gt;","synthetic":false,"types":[]}];
implementors["futures_util"] = [{"text":"impl&lt;T&gt; Write for AllowStdIo&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Write,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["mio"] = [{"text":"impl Write for TcpStream","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Write for &amp;'a TcpStream","synthetic":false,"types":[]}];
implementors["multipart"] = [{"text":"impl&lt;R&gt; Write for SizedRequest&lt;R&gt;","synthetic":false,"types":[]}];
implementors["native_tls"] = [{"text":"impl&lt;S:&nbsp;Read + Write&gt; Write for TlsStream&lt;S&gt;","synthetic":false,"types":[]}];
implementors["openssl"] = [{"text":"impl Write for Hasher","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Write for Signer&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Write for Verifier&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;S:&nbsp;Read + Write&gt; Write for SslStream&lt;S&gt;","synthetic":false,"types":[]}];
implementors["socket2"] = [{"text":"impl Write for Socket","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Write for &amp;'a Socket","synthetic":false,"types":[]}];
implementors["tempfile"] = [{"text":"impl Write for NamedTempFile","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Write for &amp;'a NamedTempFile","synthetic":false,"types":[]},{"text":"impl Write for SpooledTempFile","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()