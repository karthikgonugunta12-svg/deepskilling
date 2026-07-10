using System;

class Calculator
{
    public int CalculateTotal(int a, int b)
    {
        return a + b;
    }

    public double CalculateTotal(double a, double b, double c)
    {
        return a + b + c;
    }
}

class Program
{
    static void Main()
    {
        Calculator c = new Calculator();

        Console.WriteLine(c.CalculateTotal(10, 20));
        Console.WriteLine(c.CalculateTotal(1.5, 2.5, 3.5));
    }
}