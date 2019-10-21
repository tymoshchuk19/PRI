<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8"/>
    
    <xsl:template match="/">
        <html>
            <head>
                <title>Arqueosítios</title>
                <meta charset="UTF-8"></meta>
            </head>
            <body>
                <h1>Arqueosítios</h1>
                <ol>
                    <xsl:apply-templates/>
                </ol>
            </body>
        </html>
        <xsl:apply-templates mode="individual"/>
    </xsl:template>
    
    <xsl:template match="ARQELEM">  
        <li id="{generate-id()}">
            <a href="arqDocs/{generate-id()}.html">
                <xsl:value-of select="IDENTI"/>
            </a>
        </li>
    </xsl:template>
    
    <xsl:template match="ARQELEM" mode="individual">  
        <xsl:result-document href="arqDocs/{generate-id()}.html">
            <html>
                <head>
                    <title>//TODO</title>
                    <meta charset="UTF-8"></meta>
                </head>
                <body>
                    <h1><xsl:value-of select="IDENTI"/></h1>
                        <xsl:if test="IMAGEM">
                            <hr>
                                <a>//TODO IMAGEM</a>
                            </hr>
                        </xsl:if>
                            <xsl:apply-templates/>
                    <hr width="40%"/>
                    <address>
                        <a href="../index.html#{generate-id()}">Voltar ao indice</a>
                    </address> 
                </body>    
            </html>
        </xsl:result-document>
    </xsl:template>
    
    <xsl:template match="TIPO">
        <hr>
            <th>Tipo:</th><td><xsl:value-of select="@ASSUNTO"/></td>
        </hr>
    </xsl:template>
    
    <xsl:template match="DESCRI">
        <hr>
            <p><xsl:apply-templates/></p>
        </hr>
    </xsl:template>
    
    <xsl:template match="LIGA">
            <a href="https://www.google.com/search?q={@TERMO}"><xsl:apply-templates/></a>
    </xsl:template>
    
    <xsl:template match="CRONO">
        <hr>
            <p><b>Crono: </b><xsl:apply-templates/></p>
        </hr>
    </xsl:template>
    
    <xsl:template match="LUGAR">
        <hr>
            <p><b>Lugar: </b><xsl:apply-templates/></p>
        </hr>
    </xsl:template>
    
    <xsl:template match="FREGUE">
        <hr>
            <p><b>Freguesia: </b><xsl:apply-templates/></p>
        </hr>
    </xsl:template>
    
    <xsl:template match="CONCEL">
        <hr>
            <p><b>Conselho: </b><xsl:apply-templates/></p>
        </hr>
    </xsl:template>
    <xsl:template match="CODADM">
        <hr>
            <p><b>Cod: </b><xsl:apply-templates/></p>
        </hr>
    </xsl:template>
    
    <xsl:template match="LATITU">
        <hr>
            <p><b>Latitude: </b><xsl:apply-templates/></p>
        </hr>
    </xsl:template>
    
    <xsl:template match="LONGIT">
        <hr>
            <p><b>Longitude: </b><xsl:apply-templates/></p>
        </hr>
    </xsl:template>
    
    <xsl:template match="ALTITU">
        <hr>
            <p><b>Altitude: </b><xsl:apply-templates/></p>
        </hr>
    </xsl:template>
    
    <xsl:template match="ACESSO">
        <hr>
            <p><xsl:apply-templates/></p>
        </hr>
    </xsl:template>
    
    <xsl:template match="QUADRO">
        <hr>
            <p><xsl:apply-templates/></p>
        </hr>
    </xsl:template>
    
    <xsl:template match="QUADRO">
        <hr>
            <p><xsl:apply-templates/></p>
        </hr>
    </xsl:template>
    
    
    <xsl:template match="TRAARQ">
        <hr>
            <p><xsl:apply-templates/></p>
        </hr>
    </xsl:template>
    
    
    <xsl:template match="DESARQ">
        <hr>
            <p><xsl:apply-templates/></p>
        </hr>
    </xsl:template>
    
    
    <xsl:template match="INTERP">
        <hr>
            <p><xsl:apply-templates/></p>
        </hr>
    </xsl:template>
    
    
    <xsl:template match="DEPOSI">
        <hr>
            <p><xsl:apply-templates/></p>
        </hr>
    </xsl:template>
    
    
    <xsl:template match="INTERE">
        <hr>
            <p><xsl:apply-templates/></p>
        </hr>
    </xsl:template>
    
    <xsl:template match="BIBLIO">
        <hr>
            <p><xsl:apply-templates/></p>
        </hr>
    </xsl:template>
    
    <xsl:template match="AUTOR">
        <hr>
            <p><b>Autor: </b><xsl:apply-templates/></p>
        </hr>
    </xsl:template>
    
    <xsl:template match="DATA">
        <hr>
            <p><b>Data: </b><xsl:apply-templates/></p>
        </hr>
    </xsl:template>
    
</xsl:stylesheet>