export function selectText(select) {
    switch(select) {
        case "service1":
          return(
              <>
                <br/>Servicing1 South Australia and rural Queensland,<br/>
                our team of skilled technicians can recondition and upgrade a wide range of generators, compressors,<br/> 
                engine driven pumps, engines and engine driven machinery.<br/>
              </>
          );
          break;
        case "service2":
            return(
                <>
                  <br/>Repairs2 and service can be done on site in our workshop by our team of skilled technicians for Adelaide
                  <br/>metro or booked in alignment during a routine service run in rural South Australia and Queensland
                  <br/>all with fully equipped service vehicles.
                </>
            );
          break;
        case "service3":
            return(
                <>
                    <br/>Repairs3 and service can be done on site in our workshop by our team of skilled technicians for Adelaide
                    <br/>metro or booked in alignment during a routine service run in rural South Australia and Queensland
                    <br/>all with fully equipped service vehicles.
                </>
            );
          break;
        default:
          // code block
      } 
}

export function selectHeading(select, type) {

    switch(type){
        case "product":
            switch(select) {
                case "product1":
                  return("Product 1 heading");
                  break;
                case "product2":
                    return("Product 2 heading");
                  break;
                case "product3":
                    return("Product 3 heading");
                  break;
                default:
                  // code block
              } 
        break;
        case "service":
            switch(select) {
                case "service1":
                  return("Service 1 heading");
                  break;
                case "service2":
                    return("Service 2 heading");
                  break;
                case "service3":
                    return("Service 3 heading");
                  break;
                default:
                  // code block
              } 
              break;       // code block
        } 
       
    
}

export function selectImage(select, type) {
    switch(type){
        case "product":
            switch(select) {
                case "product1":
                  return("product1");
                  break;
                case "product2":
                    return("product2");
                  break;
                case "product3":
                    return("product3");
                  break;
                default:
                  // code block
              } 
            break;
        case "service":
            switch(select) {
                case "service1":
                    return("service1");
                  break;
                case "service2":
                    return("service2");
                  break;
                case "service3":
                    return("service3");
                  break;
                default:
                  // code block
              } 
            break;
    }
}