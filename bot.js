var url = 'https://www.extradigital.es/wp-admin/admin-ajax.php';

var data = "action=yop_poll_record_vote&_token=2a08613b5a&data=%7B%22pollId%22%3A%2232%22%2C%22pollUid%22%3A%22d3730a89e8861e43df7dac085414d66d%22%2C%22pageId%22%3A%22162975%22%2C%22reCaptcha%22%3A%22%22%2C%22trackingId%22%3A%22%22%2C%22gdprConsent%22%3A%22%22%2C%22data%22%3A%5B%7B%22id%22%3A%2233%22%2C%22type%22%3A%22question%22%2C%22data%22%3A%5B%7B%22id%22%3A%22300%22%2C%22data%22%3Atrue%7D%5D%7D%5D%2C%22user%22%3A%7B%22id%22%3A%22%22%2C%22first_name%22%3A%22%22%2C%22last_name%22%3A%22%22%2C%22email%22%3A%22%22%2C%22type%22%3A%22anonymous%22%2C%22f_data%22%3A%22%22%7D%7D";

setInterval(function () {

    document.cookie = 'ypdt' + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';

    fetch(url, {

        method: 'POST',

        body: data,

        headers: {

            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",

            "x-requested-with": "XMLHttpRequest"

        }

    }).then(res => res.json())

        .catch(error => console.error('Error:', error))

        .then(response => console.log('Voto pa Isaac!!', response))

}, 3000);
