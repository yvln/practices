﻿#pragma checksum "..\..\RecipeEntryWindow.xaml" "{406ea660-64cf-4c82-b6f0-42d48172a799}" "65458AA7E8D038E1DE6F75992EB43CB5"
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using SourcicoProjectTest;
using System;
using System.Diagnostics;
using System.Windows;
using System.Windows.Automation;
using System.Windows.Controls;
using System.Windows.Controls.Primitives;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Ink;
using System.Windows.Input;
using System.Windows.Markup;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Media.Effects;
using System.Windows.Media.Imaging;
using System.Windows.Media.Media3D;
using System.Windows.Media.TextFormatting;
using System.Windows.Navigation;
using System.Windows.Shapes;
using System.Windows.Shell;


namespace SourcicoProjectTest {
    
    
    /// <summary>
    /// RecipeEntryWindow
    /// </summary>
    public partial class RecipeEntryWindow : System.Windows.Window, System.Windows.Markup.IComponentConnector {
        
        
        #line 38 "..\..\RecipeEntryWindow.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.TextBox recipeNameTB;
        
        #line default
        #line hidden
        
        
        #line 53 "..\..\RecipeEntryWindow.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.ListBox ingredientsLB;
        
        #line default
        #line hidden
        
        
        #line 57 "..\..\RecipeEntryWindow.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.Button addIngBtn;
        
        #line default
        #line hidden
        
        
        #line 58 "..\..\RecipeEntryWindow.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.Button removeIngBtn;
        
        #line default
        #line hidden
        
        
        #line 64 "..\..\RecipeEntryWindow.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.ListBox addedIngrediendtsLB;
        
        #line default
        #line hidden
        
        
        #line 100 "..\..\RecipeEntryWindow.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.ListBox hoursLB;
        
        #line default
        #line hidden
        
        
        #line 107 "..\..\RecipeEntryWindow.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.ListBox minutesLB;
        
        #line default
        #line hidden
        
        
        #line 114 "..\..\RecipeEntryWindow.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.TextBlock prepTimeTB;
        
        #line default
        #line hidden
        
        
        #line 122 "..\..\RecipeEntryWindow.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.Button saveRecipeDataBtn;
        
        #line default
        #line hidden
        
        private bool _contentLoaded;
        
        /// <summary>
        /// InitializeComponent
        /// </summary>
        [System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [System.CodeDom.Compiler.GeneratedCodeAttribute("PresentationBuildTasks", "4.0.0.0")]
        public void InitializeComponent() {
            if (_contentLoaded) {
                return;
            }
            _contentLoaded = true;
            System.Uri resourceLocater = new System.Uri("/SourcicoProjectTest;component/recipeentrywindow.xaml", System.UriKind.Relative);
            
            #line 1 "..\..\RecipeEntryWindow.xaml"
            System.Windows.Application.LoadComponent(this, resourceLocater);
            
            #line default
            #line hidden
        }
        
        [System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [System.CodeDom.Compiler.GeneratedCodeAttribute("PresentationBuildTasks", "4.0.0.0")]
        [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Never)]
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Design", "CA1033:InterfaceMethodsShouldBeCallableByChildTypes")]
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Maintainability", "CA1502:AvoidExcessiveComplexity")]
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1800:DoNotCastUnnecessarily")]
        void System.Windows.Markup.IComponentConnector.Connect(int connectionId, object target) {
            switch (connectionId)
            {
            case 1:
            
            #line 8 "..\..\RecipeEntryWindow.xaml"
            ((SourcicoProjectTest.RecipeEntryWindow)(target)).Closing += new System.ComponentModel.CancelEventHandler(this.Window_Closing);
            
            #line default
            #line hidden
            
            #line 8 "..\..\RecipeEntryWindow.xaml"
            ((SourcicoProjectTest.RecipeEntryWindow)(target)).Loaded += new System.Windows.RoutedEventHandler(this.Window_Loaded);
            
            #line default
            #line hidden
            return;
            case 2:
            this.recipeNameTB = ((System.Windows.Controls.TextBox)(target));
            return;
            case 3:
            this.ingredientsLB = ((System.Windows.Controls.ListBox)(target));
            return;
            case 4:
            this.addIngBtn = ((System.Windows.Controls.Button)(target));
            
            #line 57 "..\..\RecipeEntryWindow.xaml"
            this.addIngBtn.Click += new System.Windows.RoutedEventHandler(this.addIngBtn_Click);
            
            #line default
            #line hidden
            return;
            case 5:
            this.removeIngBtn = ((System.Windows.Controls.Button)(target));
            
            #line 58 "..\..\RecipeEntryWindow.xaml"
            this.removeIngBtn.Click += new System.Windows.RoutedEventHandler(this.removeIngBtn_Click);
            
            #line default
            #line hidden
            return;
            case 6:
            this.addedIngrediendtsLB = ((System.Windows.Controls.ListBox)(target));
            return;
            case 7:
            this.hoursLB = ((System.Windows.Controls.ListBox)(target));
            
            #line 102 "..\..\RecipeEntryWindow.xaml"
            this.hoursLB.MouseUp += new System.Windows.Input.MouseButtonEventHandler(this.hoursLB_MouseUp);
            
            #line default
            #line hidden
            return;
            case 8:
            this.minutesLB = ((System.Windows.Controls.ListBox)(target));
            
            #line 109 "..\..\RecipeEntryWindow.xaml"
            this.minutesLB.MouseUp += new System.Windows.Input.MouseButtonEventHandler(this.minutesLB_MouseUp);
            
            #line default
            #line hidden
            return;
            case 9:
            this.prepTimeTB = ((System.Windows.Controls.TextBlock)(target));
            return;
            case 10:
            this.saveRecipeDataBtn = ((System.Windows.Controls.Button)(target));
            
            #line 122 "..\..\RecipeEntryWindow.xaml"
            this.saveRecipeDataBtn.Click += new System.Windows.RoutedEventHandler(this.saveRecipeDataBtn_Click);
            
            #line default
            #line hidden
            return;
            }
            this._contentLoaded = true;
        }
    }
}
