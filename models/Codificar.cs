using System;
using System.Text;

namespace meliPOS.models
{
    public class Codificar
    {
        public string Crear(string value)
        {
            string auxiliar = "";
            byte[] code;
            Boolean iterador = false;
            /* RECORREMOS EL STRING */
            foreach (char n in value)
            {
                string data = n.ToString();//pasa el caracter a string
                int chart = (int)Convert.ToChar(data);//convierte la letra en su valor en ascii
                auxiliar += iterador ? "," + chart : chart.ToString();//si no es la primer letra agrega un separador (,)
                iterador = true;//cambia despues de la primer vuelta
            }
            code =  Encoding.ASCII.GetBytes(auxiliar);//transforma el string a ascii para poder convertirse a string.
            return Convert.ToBase64String(code);
        }
    }
}