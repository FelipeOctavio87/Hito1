import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import '../assets/css/main.css';

const Home = () =>{
    const pizzasMostrar = [
        {
            name: "Napolitana",
            price: 5950,
            ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
            img: "https://minichef.net/wp-content/uploads/2020/05/pizza-napolitana.jpg"
        },
        {
            name: "Dadino Pepperoni",
            price: 6950,
            ingredients: ["mozzarella", "pepperoni", "orégano"],
            img: "https://th.bing.com/th/id/OIP.Xz0CmzBWsS4tGQq9NzCnHwHaGN?rs=1&pid=ImgDetMain"
        },
        {
            name: "Oh My Pizza Luco",
            price: 5950,
            ingredients: ["mozzarella", "salsa de tomates", "carne mechada casera"],
            img: "https://cdn.mer-cat.com/ohmypizza/1200x1200/img/products/oh_my_luco_mercat_1654468544zqpzQm.png?pass=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjoiMTIwMHgxMjAwL2ltZy9wcm9kdWN0cy9vaF9teV9sdWNvX21lcmNhdF8xNjU0NDY4NTQ0enFwelFtLnBuZyJ9.YjLJ6NeTtsVd--qfR8eH3pap1Oph72YoTplVvVZ4jGI"
        },
    ]
    return(
        <main>
            <Header />
            
            <div className="container">
                <div className="row">
                    {pizzasMostrar.map((pizza, index) => (
                        <div className="col-12 col-md-4 mb-2" key={index}>
                            <CardPizza
                                name={pizza.name}
                                price={pizza.price}
                                ingredients={pizza.ingredients}
                                img={pizza.img}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Home;