const url = "http://localhost:8080/NA12878.exome.bam";
const encodedURL = encodeURIComponent(url);

const cmd = new iobio.cmd(
  'localhost:4018/',
  ['view', '-H', encodedURL],
  { 'urlparams': {'protocol':'http'} }
);

cmd.on('data', function(data) {
  console.log(data)
})

cmd.run();
