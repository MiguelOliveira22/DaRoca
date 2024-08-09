# -*- coding: utf-8 -*-

################################################################################
## Form generated from reading UI file 'WindowDialog.ui'
##
## Created by: Qt User Interface Compiler version 6.7.2
##
## WARNING! All changes made in this file will be lost when recompiling UI file!
################################################################################

from PySide6.QtCore import (QCoreApplication, QDate, QDateTime, QLocale,
    QMetaObject, QObject, QPoint, QRect,
    QSize, QTime, QUrl, Qt)
from PySide6.QtGui import (QBrush, QColor, QConicalGradient, QCursor,
    QFont, QFontDatabase, QGradient, QIcon,
    QImage, QKeySequence, QLinearGradient, QPainter,
    QPalette, QPixmap, QRadialGradient, QTransform)
from PySide6.QtWidgets import (QApplication, QCheckBox, QDialog, QGridLayout,
    QLabel, QLineEdit, QPushButton, QSizePolicy,
    QWidget)

class Ui_windowDialog(object):
    def setupUi(self, windowDialog):
        if not windowDialog.objectName():
            windowDialog.setObjectName(u"windowDialog")
        windowDialog.resize(381, 139)
        self.layoutWidget = QWidget(windowDialog)
        self.layoutWidget.setObjectName(u"layoutWidget")
        self.layoutWidget.setGeometry(QRect(10, 10, 361, 91))
        self.gridLayout = QGridLayout(self.layoutWidget)
        self.gridLayout.setObjectName(u"gridLayout")
        self.gridLayout.setContentsMargins(0, 0, 0, 0)
        self.lblUser = QLabel(self.layoutWidget)
        self.lblUser.setObjectName(u"lblUser")

        self.gridLayout.addWidget(self.lblUser, 0, 0, 1, 1)

        self.edUser = QLineEdit(self.layoutWidget)
        self.edUser.setObjectName(u"edUser")

        self.gridLayout.addWidget(self.edUser, 0, 2, 1, 1)

        self.lblPass = QLabel(self.layoutWidget)
        self.lblPass.setObjectName(u"lblPass")

        self.gridLayout.addWidget(self.lblPass, 1, 0, 1, 1)

        self.lblCript = QLabel(self.layoutWidget)
        self.lblCript.setObjectName(u"lblCript")

        self.gridLayout.addWidget(self.lblCript, 3, 0, 1, 1)

        self.edPass = QLineEdit(self.layoutWidget)
        self.edPass.setObjectName(u"edPass")
        self.edPass.setEchoMode(QLineEdit.Password)
        self.edPass.setClearButtonEnabled(True)

        self.gridLayout.addWidget(self.edPass, 1, 2, 1, 1)

        self.checkBox = QCheckBox(self.layoutWidget)
        self.checkBox.setObjectName(u"checkBox")

        self.gridLayout.addWidget(self.checkBox, 3, 2, 1, 1)

        self.btnEnter = QPushButton(windowDialog)
        self.btnEnter.setObjectName(u"btnEnter")
        self.btnEnter.setGeometry(QRect(220, 110, 75, 23))
        self.btnExit = QPushButton(windowDialog)
        self.btnExit.setObjectName(u"btnExit")
        self.btnExit.setGeometry(QRect(300, 110, 75, 23))

        self.retranslateUi(windowDialog)

        QMetaObject.connectSlotsByName(windowDialog)
    # setupUi

    def retranslateUi(self, windowDialog):
        windowDialog.setWindowTitle(QCoreApplication.translate("windowDialog", u"Login - DaRoca", None))
        self.lblUser.setText(QCoreApplication.translate("windowDialog", u"Usu\u00e1rio", None))
        self.lblPass.setText(QCoreApplication.translate("windowDialog", u"Senha", None))
        self.lblCript.setText(QCoreApplication.translate("windowDialog", u"Criptografia", None))
        self.edPass.setText("")
        self.checkBox.setText(QCoreApplication.translate("windowDialog", u"Ignorar Checks De Integridade", None))
        self.btnEnter.setText(QCoreApplication.translate("windowDialog", u"Entrar", None))
        self.btnExit.setText(QCoreApplication.translate("windowDialog", u"Sair", None))
    # retranslateUi

