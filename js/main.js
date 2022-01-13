class autos {

    constructor (marca, modelo, año, precio) {
        this.marca = marca.toUpperCase();
        this.modelo = modelo.toUpperCase();
        this.año = año;
        this.precio = parseFloat(precio);
        this.disponible = true;
    }

    precioTarjeta() {
        this.precio = this.precio * 1.2; 
    }
    alquilar() {
        this.disponible = false;
    }
}

//Defino nuevos tipos de auto
const auto1 = new autos ("Nissan" , "Versa" , 2015 , 8000);
const auto2 = new autos ("Chevrolet" , "Onix" , 2018 , 7500);
const auto3 = new autos ("Chevrolet" , "Corsa" , 2014 , 5500);
const auto4 = new autos ("Volkswagen" , "Fox" , 2020 , 7000);
const auto5 = new autos ("Fiat" , "Cronos" , 2021 , 8400);

alert(`Bienvenido a RENT-A-CAR`);
let choise = prompt(`Elija uno de nuestros autos disponibles:  \n 1- Nissan Versa 2015 \n 2- Chevrolet Onix 2018 \n 3- Chevrolet Corsa 2014 \n 4- Volkswagen Fox 2020 \n 5- Fiat Cronos 2021 `);

switch(choise) {
    case "1":
        let choiseCar1 = prompt(`Nissa Versa 2015. \n Desea ver precio en : \n 1- EFECTIVO \n 2- TARJETA`)
        if((choiseCar1 == 1) || (choiseCar1 == "efectivo")) {
            alert(`El precio en efectivo es ${auto1.precio}`)
            
        }
        else if ((choiseCar1 == 2) || (choiseCar1 == "tarjeta")) {
            auto1.precioTarjeta();
            alert(`El precio con tarjeta es ${auto1.precio}`)
        } 
        break;
    case "2":
        let choiseCar2 = prompt(`Chevrolet Onix 2018. \n Desea ver precio en : \n 1- EFECTIVO \n 2- TARJETA`)
        if((choiseCar2 == 1) || (choiseCar2 == "efectivo")) {
            alert(`El precio en efectivo es ${auto2.precio}`)
                
        }
        else if ((choiseCar2 == 2) || (choiseCar2 == "tarjeta")) {
            auto2.precioTarjeta();
            alert(`El precio con tarjeta es ${auto2.precio}`)
        } 
        break;  
        case "3":
            let choiseCar3 = prompt(`Chevrolet Corsa 2014. \n Desea ver precio en : \n 1- EFECTIVO \n 2- TARJETA`)
            if((choiseCar3 == 1) || (choiseCar3 == "efectivo")) {
                alert(`El precio en efectivo es ${auto3.precio}`)
                    
            }
            else if ((choiseCar3 == 2) || (choiseCar3 == "tarjeta")) {
                auto3.precioTarjeta();
                alert(`El precio con tarjeta es ${auto3.precio}`)
            } 
            break; 
            case "4":
            let choiseCar4 = prompt(`Volkswagen Fox 2020. \n Desea ver precio en : \n 1- EFECTIVO \n 2- TARJETA`)
            if((choiseCar4 == 1) || (choiseCar4 == "efectivo")) {
                alert(`El precio en efectivo es ${auto4.precio}`)
                    
            }
            else if ((choiseCar4 == 2) || (choiseCar4 == "tarjeta")) {
                auto4.precioTarjeta();
                alert(`El precio con tarjeta es ${auto4.precio}`)
            } 
            break;  
            case "5":
                let choiseCar5 = prompt(`Fiat Cronos 2021. \n Desea ver precio en : \n 1- EFECTIVO \n 2- TARJETA`)
                if((choiseCar5 == 1) || (choiseCar5 == "efectivo")) {
                    alert(`El precio en efectivo es ${auto5.precio}`)
                        
                }
                else if ((choiseCar5 == 2) || (choiseCar5 == "tarjeta")) {
                    auto5.precioTarjeta();
                    alert(`El precio con tarjeta es ${auto5.precio}`)
                } 
                break;           
}




