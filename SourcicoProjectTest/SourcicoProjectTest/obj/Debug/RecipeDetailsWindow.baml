   M S B A M L   `   `   `  ����N  JSourcicoProjectTest, Version=1.0.0.0, Culture=neutral, PublicKeyToken=nullC&clr-namespace:SourcicoProjectTest.codeSourcicoProjectTest.code  5   	   -    'SourcicoProjectTest.RecipeDetailsWindow   5   	   R NWindowsBase, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35W SPresentationCore, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35D 9http://schemas.microsoft.com/winfx/2006/xaml/presentation    5   	   R NSystem.Xaml, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   8local&clr-namespace:SourcicoProjectTest.code     5   	     � Title$  Recipe Details��5   	   $	��450��6    $	��800��6-    � DataContext 5
      '   !SourcicoProjectTest.code.MainMVVM  5   
    � 	Resources 5      :   4SourcicoProjectTest.code.IngredientQuantityConverter   quantityConverter6   0SourcicoProjectTest.code.IngredientTypeConverter  ingrTypeConverter��%:   &	        &	        5   
   6,     5   
   6(   5      .��5      � $��
5, 5, 5, 5q�6    � ColumnDefinitions 5   
   �� 5      �� 5      $��3* �6    � RowDefinitions 5   
   �� 5      �� 5      �� 5      �� 5      $��3* �6   �� 5      �� 5      �� 5       .+�5#   
   �� $��0��6   $��0��6$   $��Recipe ID: ��61   $��
5, 5, 5, 5q�6D   �� 5$   
   $��1��6   $��0��5%      $��
5, 5, 5, 5q�5'      ��5&      �� *selectedRecipe.ID+5'      �� 5)   
   $��0��6   $��1��6$   $��Recipe Name: ��61   $��
5, 5, 5, 5q�6F   �� 5*   
   $��1��6   $��1��5+      $��
5, 5, 5, 5q�5-      ��5,      �� *selectedRecipe.name+5-      �� 5/   
   $��0��6   $��2��6$   $��Recipe Source: ��61   $��
5, 5, 5, 5q�6H   �� 50   
   $��1��6   $��2��51      $��
5, 5, 5, 5q�53      ��52      �� *selectedRecipe.source+53      &   System.Windows.Controls.DataGrid  55   
   $��0��6   $��2��56      $��3��57         AutoGenerateColumns .     
IsReadOnly . $��
5, 5, 5, 5q�5<      ��58      �� *selectedRecipe.ingredients+ �� SelectedItem 59      �� *#!selectedRecipe.selectedIngredient+   Columns 5=      0  *System.Windows.Controls.DataGridTextColumn  5>      ,  &System.Windows.Controls.DataGridColumn	   Header$	 ID��6%   1  +System.Windows.Controls.DataGridBoundColumn
   Binding
 5?      �� *ingredientID+  5A      $
	 Name��6%   
 5B      �� *Name+  5D      $
	 Type��6%   
 5E      �� *ingredientType+ �� 	Converter# [   5G      $	 Quantity��6%   
 5H      `� 5I       �� StringFormat$ {0} {1}��6'   .1�5J      ��  �� Path$ quantity�6&   �� 5K      $ ingredientTypeLabel�6&   5L      5N      5Q      �� 5S   
   $��0��6   $��4��6$   $��Preparation Time: ��61   $��
5, 5, 5, 5q�6K   �� 5T   
   $��1��6   $��4��5U      $��
5, 5, 5, 5q�5W      ��5V      �� *selectedRecipe.prepTime+5W      �� 5Y   
   $��0��6   $��5��6$   $ ��Rreparation Instructions: ��61   $��
5, 5, 5, 5q�6S   �� 5Z   
   $��1��6   $��5��5[      $��
5, 5, 5, 5q�5]      ��5\      �� *!selectedRecipe.prepInstructions+5]      �� 5_   
   -   5        $��deleteRecipeBtn��5c      $��0��5_      $��6��5`      $��Delete Recipe��5a      $��
5, 5, 5, 5q�5b      5d      5e      5f      