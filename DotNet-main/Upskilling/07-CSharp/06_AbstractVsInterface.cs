using System;

abstract class Vehicle
{
    public abstract void Drive();
}

interface IDrivable
{
    void Start();
}

class Car : Vehicle, IDrivable
{
    public override void Drive()
    {
        Console.WriteLine("Driving");
    }

    public void Start()
    {
        Console.WriteLine("Starting");
    }
}

class Program
{
    static void Main()
    {
        Car car = new Car();
        car.Start();
        car.Drive();
    }
}