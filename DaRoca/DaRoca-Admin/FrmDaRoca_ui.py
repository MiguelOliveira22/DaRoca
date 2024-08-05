# -*- coding: utf-8 -*-

################################################################################
## Form generated from reading UI file 'FrmDaRoca.ui'
##
## Created by: Qt User Interface Compiler version 6.7.1
##
## WARNING! All changes made in this file will be lost when recompiling UI file!
################################################################################

from PySide6.QtCore import (QCoreApplication, QDate, QDateTime, QLocale,
    QMetaObject, QObject, QPoint, QRect,
    QSize, QTime, QUrl, Qt)
from PySide6.QtGui import (QAction, QBrush, QColor, QConicalGradient,
    QCursor, QFont, QFontDatabase, QGradient,
    QIcon, QImage, QKeySequence, QLinearGradient,
    QPainter, QPalette, QPixmap, QRadialGradient,
    QTransform)
from PySide6.QtWidgets import (QApplication, QMainWindow, QMenu, QMenuBar,
    QSizePolicy, QStatusBar, QTabWidget, QToolBar,
    QWidget)
import arquives_rc

class Ui_MainWindow(object):
    def setupUi(self, MainWindow):
        if not MainWindow.objectName():
            MainWindow.setObjectName(u"MainWindow")
        MainWindow.resize(721, 336)
        self.actionSair = QAction(MainWindow)
        self.actionSair.setObjectName(u"actionSair")
        icon = QIcon()
        icon.addFile(u":/resourcesMain/resources/CLOSE1.BMP", QSize(), QIcon.Normal, QIcon.Off)
        self.actionSair.setIcon(icon)
        self.actionLogin = QAction(MainWindow)
        self.actionLogin.setObjectName(u"actionLogin")
        self.actionSair_2 = QAction(MainWindow)
        self.actionSair_2.setObjectName(u"actionSair_2")
        self.centralwidget = QWidget(MainWindow)
        self.centralwidget.setObjectName(u"centralwidget")
        self.tabWidget = QTabWidget(self.centralwidget)
        self.tabWidget.setObjectName(u"tabWidget")
        self.tabWidget.setGeometry(QRect(0, 0, 721, 261))
        self.tabAction = QWidget()
        self.tabAction.setObjectName(u"tabAction")
        self.tabAction.setEnabled(True)
        self.tabWidget.addTab(self.tabAction, "")
        self.tabList = QWidget()
        self.tabList.setObjectName(u"tabList")
        self.tabWidget.addTab(self.tabList, "")
        MainWindow.setCentralWidget(self.centralwidget)
        self.menubar = QMenuBar(MainWindow)
        self.menubar.setObjectName(u"menubar")
        self.menubar.setGeometry(QRect(0, 0, 721, 18))
        self.menuSair = QMenu(self.menubar)
        self.menuSair.setObjectName(u"menuSair")
        MainWindow.setMenuBar(self.menubar)
        self.statusbar = QStatusBar(MainWindow)
        self.statusbar.setObjectName(u"statusbar")
        MainWindow.setStatusBar(self.statusbar)
        self.toolBar = QToolBar(MainWindow)
        self.toolBar.setObjectName(u"toolBar")
        self.toolBar.setMovable(False)
        self.toolBar.setToolButtonStyle(Qt.ToolButtonIconOnly)
        self.toolBar.setFloatable(True)
        MainWindow.addToolBar(Qt.ToolBarArea.TopToolBarArea, self.toolBar)

        self.menubar.addAction(self.menuSair.menuAction())
        self.menuSair.addAction(self.actionLogin)
        self.menuSair.addSeparator()
        self.menuSair.addAction(self.actionSair_2)
        self.toolBar.addAction(self.actionSair)

        self.retranslateUi(MainWindow)

        self.tabWidget.setCurrentIndex(0)


        QMetaObject.connectSlotsByName(MainWindow)
    # setupUi

    def retranslateUi(self, MainWindow):
        MainWindow.setWindowTitle(QCoreApplication.translate("MainWindow", u"MainWindow", None))
        self.actionSair.setText(QCoreApplication.translate("MainWindow", u"Sair", None))
#if QT_CONFIG(tooltip)
        self.actionSair.setToolTip(QCoreApplication.translate("MainWindow", u"Sai E Fecha O Programa", None))
#endif // QT_CONFIG(tooltip)
#if QT_CONFIG(shortcut)
        self.actionSair.setShortcut(QCoreApplication.translate("MainWindow", u"Ctrl+L", None))
#endif // QT_CONFIG(shortcut)
        self.actionLogin.setText(QCoreApplication.translate("MainWindow", u"Login", None))
        self.actionSair_2.setText(QCoreApplication.translate("MainWindow", u"Sair", None))
        self.tabWidget.setTabText(self.tabWidget.indexOf(self.tabAction), QCoreApplication.translate("MainWindow", u"Fun\u00e7\u00f5es", None))
        self.tabWidget.setTabText(self.tabWidget.indexOf(self.tabList), QCoreApplication.translate("MainWindow", u"Listagem", None))
        self.menuSair.setTitle(QCoreApplication.translate("MainWindow", u"Acesso", None))
        self.toolBar.setWindowTitle(QCoreApplication.translate("MainWindow", u"toolBar", None))
    # retranslateUi

