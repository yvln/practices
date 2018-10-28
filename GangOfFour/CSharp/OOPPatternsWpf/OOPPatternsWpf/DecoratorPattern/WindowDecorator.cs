﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OOPPatternsWpf.DecoratorPattern
{
   abstract class WindowDecorator:DPWindow
    {
        protected DPWindow windowToBeDecorated; // the Window being decorated

        public WindowDecorator(DPWindow windowToBeDecorated)
        {
            this.windowToBeDecorated = windowToBeDecorated;
        }

        public void draw()
        {
            windowToBeDecorated.draw(); //Delegation
        }

        public string GetDescription()
        {
            return windowToBeDecorated.GetDescription(); //Delegation
        }
    }
}
