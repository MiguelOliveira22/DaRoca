import pyodbc as bd
import getpass as pswd

def main():
    Acesso = bd.connect(
        driver = "{SQL Server}",
        server = "regulus.cotuca.unicamp.br",
        database = "BD24143",
        uid = "BD24143",
        pwd = pswd.getpass("Senha: ")
    )
    Cursor = Acesso.cursor()
    Cursor.execute()
    Cursor.commit()
    Cursor.close()
    if not Acesso.closed:
        Acesso.close()

if __name__ == "__main__":
    main()