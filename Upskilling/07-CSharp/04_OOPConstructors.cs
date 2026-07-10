using System;

class Car
{
    public string Make;
    public string Model;

    public Car()
    {
        Make = "Default";
        Model = "Default";
    }

    public Car(string make, string model)
    {
        Make = make;
        Model = model;
    }
}

class Program
{
    static void Main()
    {
        Car c1 = new Car();
        Car c2 = new Car("Toyota", "Camry");

        Console.WriteLine(c1.Make);
        Console.WriteLine(c2.Make);
    }
}