using System;

class Person
{
    public string Name;
}

class Program
{
    static void ChangeValue(int x)
    {
        x = 100;
    }

    static void ChangeReference(Person p)
    {
        p.Name = "Kiran";
    }

    static void Main()
    {
        int num = 10;
        Person person = new Person { Name = "John" };

        ChangeValue(num);
        ChangeReference(person);

        Console.WriteLine(num);
        Console.WriteLine(person.Name);
    }
}