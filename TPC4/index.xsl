<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
        <xsl:output method="xhtml" indent="yes" encoding="UTF-8"/>
        
        <xsl:template match="/">
            <html>
                <head>
                    <title>Arquivo sonoro EVO</title>
                    <meta charset="UTF-8"></meta>
                </head>
                <body>
                    <h3>Arquivo Sonoro de Ernesto Veiga de Oliveira</h3>
                    <xsl:apply-templates/>
                </body>    
            </html>
        </xsl:template>
        
        <xsl:template match="doc">
            <hr/>
            <a href="musica/{count(preceding-sibling::*)+1}"><xsl:value-of select="tit"/></a>  
            <hr/>
        </xsl:template>    
    
</xsl:stylesheet>