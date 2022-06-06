
const generatePage = (generatePage) => {
    return `
      <!DOCTYPE html> 
      <html lang="en"> 
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>${generatePage.projectTitle} READme</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js" integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-kjU+l4N0Yf4ZOJErLsIcvOU2qSb74wXpOhqTvwVx3OElZRweTnQ6d31fXEoRD1Jy" crossorigin="anonymous"></script>
      </head>
    
      <body>
     
<h1 class="p-3 mb-2 bg-info text-dark text-center">MY TEAM</h1>

<div class="w-50 p-3">

    <div class="card text-left">
        <div class="card-header">

            <ul class="nav nav-pills card-header-pills">
            <li class="nav-item">
            <a class="nav-link active" href="#mem1">${generatePage.name1}</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#mem2">${generatePage.name2}</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#mem3">${generatePage.name3}</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#mem4">${generatePage.name4}</a>
            </li>
            </ul>
        </div>

        <div class="card-body" id="mem1">
            <p class="card-text">
                Employee ID: ${generatePage.id1} <br>
                Office number: ${generatePage.office1} <br>
                Email address: <a href="mailto:${generatePage.email1}">${generatePage.email1}</a> <br>
                <a href="https://github.com/${generatePage.github1}">Github account</a>
            </p>
        </div>

        <div class="card-body" id="mem2">
            <p class="card-text">
                Employee ID: ${generatePage.id2} <br>
                Office number: ${generatePage.office2} <br>
                Email address: <a href="mailto:${generatePage.email2}">${generatePage.email2}</a> <br>
                <a href="https://github.com/${generatePage.github2}">Github account</a>
            </p>
        </div>

        <div class="card-body" id="mem3">
            <p class="card-text">
                Employee ID: ${generatePage.id3} <br>  
                Office number: ${generatePage.office3} <br>
                Email address: <a href="mailto:${generatePage.email3}">${generatePage.email3}</a> <br>
                <a href="https://github.com/${generatePage.github3}">Github account</a>
            </p>
        </div>

        <div class="card-body" id="mem4">
            <p class="card-text">
                Employee ID: ${generatePage.id4} <br>   
                Office number: ${generatePage.office4} <br>
                Email address: <a href="mailto:${generatePage.email4}">${generatePage.email4}</a> <br>
                <a href="https://github.com/${generatePage.github4}">Github account</a>
            </p>
        </div>

    </div>

</div>
        
        </body>
        </html>
    `;
};



module.exports = { generatePage };