import pyodbc as bd
import getpass as pswd
from FrmDaRoca_ui import Ui_MainWindow
from WindowDialog_ui import Ui_windowDialog
from PySide6.QtWidgets import QApplication, QMainWindow, QMenu, QMenuBar, QSizePolicy, QStatusBar, QTabWidget, QToolBar, QWidget

class DaRoca(QMainWindow, Ui_MainWindow):
    def __init__(self, mainCursor):
        super().__init__()
        self.setupUi(self)
        self.show()

class DaRocaLogin(QMainWindow, Ui_windowDialog):
    def __init__(self):
        super().__init__()
        self.setupUi(self)
        self.show()

        self._mainCursor = ""
        self._accepted = False

        self.btnEnter.clicked.connect(self.getCursor)
        self.btnExit.clicked.connect(self.fecharPrograma)

    def getCursor(self):
        value = self.edUser.text()
        passwd = self.edPass.text()
        try:
            Acesso = bd.connect(
                driver = "{SQL Server}",
                server = "regulus.cotuca.unicamp.br",
                database = "BD24143",
                uid = value,
                pwd = passwd
            )
            self._mainCursor = Acesso.cursor()
            self._mainCursor.close()
            self._accepted = True
            self.fecharPrograma()
        except:
            pass
    
    def fecharPrograma(self):
        self.close()

    @property
    def mainCursor(self):
        return self._mainCursor

    @property
    def Accepted(self):
        return self._accepted

def main():
    App = QApplication()
    Buso = DaRocaLogin()
    App.exec()
    curso = Buso.mainCursor
    if curso != "":
        Uso = DaRoca(curso)
        App.exec()

if __name__ == "__main__":
    main()

'''
        Cursor.execute()
        Cursor.commit()
        Cursor.close()
        if not Acesso.closed:
            Acesso.close()
'''