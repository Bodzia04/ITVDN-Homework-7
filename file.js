        /*
            Задание 1:
            Добавьте возможность сохранить выбранный цвет страницы в cookies сроком на 1 неделю.
            Добавьте восстановление выбранного цвета из cookies, если они есть, после загрузки документа.
        */
            let color = getCookie('color');
            if(color){
                document.body.style.backgroundColor = color;
            }

            document.querySelector("#saveButton").addEventListener("click", function () {
                const form = document.forms[0];
                let selectedColor = form.color.value;
                setCookie('color', selectedColor, 7 * 24 * 60 * 60);

                document.body.style.backgroundColor = selectedColor;
                
            });

            function setCookie(name, value, maxAge){
                let encodeValue = encodeURIComponent(value);
                document.cookie = `${name}=${encodeValue};max-age=${maxAge}`;
            }

            function getCookie(name){
                let cookie = document.cookie;
                let pos = cookie.indexOf(name + '=');

                if(pos != -1){
                    let start = pos + name.length + 1;
                    let end = cookie.indexOf(';', start);

                    if(end == -1){
                        end = cookie.length;
                    }
                    let value = cookie.substring(start, end);

                    return decodeURIComponent(value);
                }
            }

/////////////////////////////////////////////////          