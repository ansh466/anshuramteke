# Nexora Applab — local preview server (port 8080)
$node = "c:\Program Files\cursor\resources\app\resources\helpers\node.exe"
$root = $PSScriptRoot

if (-not (Test-Path $node)) {
  Write-Error "Node not found at: $node`nInstall Node.js or open index.html directly in browser."
  exit 1
}

Set-Location $root
Write-Host "Starting server at http://localhost:8080" -ForegroundColor Cyan
Write-Host "Press Ctrl+C to stop." -ForegroundColor DarkGray

& $node -e @"
const http=require('http'),fs=require('fs'),path=require('path');
const root='$($root -replace '\\','\\\\')';
const types={'.html':'text/html','.css':'text/css','.js':'application/javascript','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg'};
http.createServer((req,res)=>{
  let p=path.join(root,req.url==='/'?'index.html':decodeURIComponent(req.url.split('?')[0]));
  if(!p.startsWith(root)){res.writeHead(403);return res.end();}
  fs.readFile(p,(e,d)=>{if(e){res.writeHead(404);return res.end('Not found');}
  res.writeHead(200,{'Content-Type':types[path.extname(p)]||'application/octet-stream'});res.end(d);});
}).listen(8080,()=>console.log('Ready: http://localhost:8080'));
"@
