import { getList, getItem } from "../models/todos.js";

export function mainPage(req, res) {
  let list = getList();
  if (req.query.search) {
    const q = req.query.search.toLowerCase(); // ............... 3 
        list = list.filter((el) => { 
            if (el.title.toLowerCase().includes(q)) // ............. 4 
                return true; 
            else 
                if (el.desc) 
                    return el.desc.toLowerCase().includes(q); // ... 5 
                else 
                    return false; 
        }); 

  }

  res.render("main", {
    req: req,
    todos: list,
    title: "Главная",
  });
}

export function detailPage(req, res) { 
    const t = getItem(req.params.id); 
 
    if (!t) { 
        errorPage(req, res); 
        return; 
    } 
 
     res.render('detail', { 
        todo: t, 
        title: t.title 
    }); 
} 
 
function errorPage(req, res) { 
    res.status(404); 
    res.send('<!doctype html>' + 
             '<html>' + 
             '  <head>' + 
             '    <meta charset="UTF-8">' + 
             '    <title>Ошибка</title>' + 
             '  </head>' + 
             '  <body>' + 
             '    <h1>Ошибка!</h1>' + 
             '    <p>Запрошенная страница не существует.</p>' + 
             '  </body>' + 
             '</html>'); 
} 