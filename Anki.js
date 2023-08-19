var body = JSON.parse($response.body);

body.data.is_vip = true;
body.data.vip_expire_at = 4102403992;
body.data.vip_end_at = 4102403992;
body.data.vip_day = 999; 

$done({ body: JSON.stringify(body) });
