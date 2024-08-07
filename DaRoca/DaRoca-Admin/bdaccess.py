import pyodbc as bd
import getpass as pswd
from FrmDaRoca_ui import Ui_MainWindow
from PySide6.QtWidgets import QApplication, QMainWindow, QMenu, QMenuBar, QSizePolicy, QStatusBar, QTabWidget, QToolBar, QWidget

class DaRoca(QMainWindow, Ui_MainWindow):
    def __init__(self):
        super().__init__()
        self.setupUi(self)
        self.show()
        self.

    def getCursor():
        pass

def main():
    App = QApplication()
    Uso = DaRoca()
    App.exec()
    Acesso = bd.connect(
        driver = "{SQL Server}",
        server = "localhost",
        database = "Teste",
        uid = "",
        pwd = ""
    )
    Cursor = Acesso.cursor()
    Cursor.execute()
    Cursor.commit()
    Cursor.close()
    if not Acesso.closed:
        Acesso.close()

if __name__ == "__main__":
    main()