﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OOPPatternsWpf.FacadePattern
{
    /// <summary>
    /// Trully reminds me of composite pattern
    /// </summary>
    class CarFacade
    {
        private readonly CarAccessories accessories;
        private readonly CarBody body;
        private readonly CarEngine engine;
        private readonly CarModel model;

        public CarFacade()
        {
            accessories = new CarAccessories();
            body = new CarBody();
            engine = new CarEngine();
            model = new CarModel();
        }

        public void CreateCompleteCar()
        {
            Console.WriteLine("******** Creating a Car **********");
            model.SetModel("206");
            engine.SetEngine("Petrol");
            body.SetBody("Hatchback");
            accessories.SetAccessories("child seat, cup holder");

            Console.WriteLine("******** Car creation is completed. **********");
        }
    }
}
