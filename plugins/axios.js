export default function({ $axios, redirect }) {
  // 请求拦截  
  $axios.onRequest(config => {
    console.log("Making request to " + config.url);
  });

  // 响应拦截
  $axios.onResponse(response => {
      return response.data
  })

  $axios.onError(error => {
      console.log(error)
    const code = parseInt(error.response && error.response.status);
    if (code === 400) {
      redirect("/400");
    }
  });
}
