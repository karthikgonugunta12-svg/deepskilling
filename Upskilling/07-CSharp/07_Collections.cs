using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        List<string> names = new List<string>
        {
            "Alice",
            "Bob"
        };

        Dictionary<int, string> students =
            new Dictionary<int, string>();

        students.Add(1, "Kiran");

        foreach (var n in names)
            Console.WriteLine(n);
    }
}